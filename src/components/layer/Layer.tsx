import { InputText } from 'primereact'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { LayerRestApi } from '../../utils/restapi'
import { setLayers } from '../state/features/layerSlice';

const Search = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      LayerRestApi.getAllLayers().then((res)=> 
        dispatch(setLayers(res.data))
      )
    }, [])
    

  return (
    <div>
    </div>
  )
}

export default Search