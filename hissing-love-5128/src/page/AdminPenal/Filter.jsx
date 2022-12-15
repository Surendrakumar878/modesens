import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getdata } from '../../Redux/AppReducer/action';
import styles from './MensPage.module.css'
export const Filter = () => {
    
    const mensData = useSelector((store) => {
        return store.AppReducer.data;
      });
  const dispatch = useDispatch()
  const location = useLocation();



  useEffect(() => {
    if (location || mensData.length === 0) {
        const category = searchParams.getAll('category');
        const queryParams = {
            params: {
                category: category,
                _sort: searchParams.get("sortBy") && "price",
                _order: searchParams.get("sortBy")
            }
        }
        dispatch(getdata(queryParams))
    }
}, [location.search])
const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "")
    const [category, setCategory] = useState(searchParams.getAll("category") || []);

    const HandleFilter = (e) => {
        const option = e.target.value
        let newCategory = [...category];
        if (newCategory.includes(option)) 
        {
            newCategory.splice(newCategory.indexOf(option), 1)
        }
        else 
        {
            newCategory.push(option)
        }
        setCategory(newCategory)
    }

    const HandleSortBy = (e) => {
        setSortBy(e.target.value)
    }

    useEffect(() => {
        const params = {};
        category && (params.category = category);
        sortBy && (params.sortBy = sortBy);
        setSearchParams(params);
    }, [category, setSearchParams, sortBy])
  return (
    <div>

<Box display={"flex"} justifyContent="right" mr={{lg:"130px",sm:"0px"}}>


    <h2>Filter</h2>
    <div>
        <input type="checkbox" value='mens'
            onChange={HandleFilter}
            defaultChecked={category.includes('mens')} />
        <label >Mens</label>
    </div>
    <div>
        <input type="checkbox" value='womens'
            defaultChecked={category.includes('womens')}
            onChange={HandleFilter} />
        <label >womens</label>
    </div>
    <div>
        <input type="checkbox" value='kids'
            defaultChecked={category.includes('kids')}
            onChange={HandleFilter} />
        <label >kids</label>
    </div>
    <div>
        <input type="checkbox" value='beauty'
            defaultChecked={category.includes('beauty')}
            onChange={HandleFilter} />
        <label >beauty</label>
    </div>
    <div>
        <input type="checkbox" value='jewelery'
            defaultChecked={category.includes('jewelery')}
            onChange={HandleFilter} />
        <label >jewelery</label>
    </div>
    <Box border={"1px solid red"} display={"flex"} onChange={HandleSortBy}>
    <h2>Sort</h2>
        <div>
            <input type="radio" value="asc" name='sortBy'
                defaultChecked={sortBy === "asc"} />
            <label >Asc</label>
        </div>
        <div>
            <input type="radio" value="desc" name='sortBy'
                defaultChecked={sortBy === "desc"} />
            <label>Desc</label>
        </div>
    </Box>

</Box>
    </div>
  )
}
