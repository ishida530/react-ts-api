/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components'

interface BooksListProps {
    title: string;
    src?: string;
}
interface SearchValue {
    value: string;
}

let i = 0;
let emptyArray: { title: string, src: string }[] = [];
const ProductsListWrapper = styled.div`

display:flex;
flex-wrap: wrap;
width: 90%;
margin: 0 auto;
    div{display:flex;
        flex-direction: column;
        margin: 5px auto 5px ;
        background-color: #ddd;
        border-radius: 5%;
        img{    
            width:150px;
            margin: 10px 55px 0px 55px;
            object-fit: cover;
            
        }
       
        div{
            width: auto;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            height: 100%;
            h3{
                max-width:220px;
                text-align:center      ;
        }
        }
        :hover{
            background-color: red;
            transition: .3s;
            cursor: pointer;
        }
    }

`
function ProductsList(props: BooksListProps) {
    const [booksList, setBookList] = useState<BooksListProps[]>([])
    const [searchValue, setSearchValue] = useState<SearchValue>({
        value: ""
    })
      const fetchBooks = async () => {
        const response = await fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/books/', { method: 'get' })
        const json = await response.json()
        let data = await json.forEach((element: { title: string; simple_thumb: string; }) => {
            emptyArray.push({
                src: element.simple_thumb,
                title: element.title
            })
        });
        data = emptyArray
        setBookList(data)
        return data

    }
    useEffect(() => {
        emptyArray=[]
        fetchBooks()
    }, [])


    const handleOnChange = async (event: ChangeEvent<{ value: string }>) => {
        setSearchValue({ value: event.currentTarget.value });
console.log('szuka?') 
    }

    return (
    <>
        <input onChange={handleOnChange} type="text" placeholder={"szukaj"} />
        {/* <input onChange={handleOnChange} type="text" placeholder={searchValue.value}/> */}
        <ProductsListWrapper>
          {
            booksList.filter(book => book.title.toLocaleLowerCase().includes(searchValue.value.toLocaleLowerCase())).map(({title,src}: { title: string; src?: string }) => (
                <div key={i++}>
                    <img src={src} alt={title} />
                    <div>
                        <h3 key={i++}>{title}</h3>
                    </div>
                </div>
            ))
 
            
        }
        </ProductsListWrapper>
    </>
    );
}

export default ProductsList
