import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Route, Routes ,  Navigate, useNavigate } from 'react-router-dom';
import DashboardPage from './pages/admin/DashboardPage';
import New from './pages/admin/product/New';
import AdminLayout from './pages/layouts/AdminLayout';
import Index from './pages/admin/product/Index';
import { useEffect, useState } from 'react';
import { ProductType } from './types/ProductType';
import Update from './pages/admin/product/Update';
import ApiProduct from './api/product';
import HomePage from './pages/site/HomePage';
import SiteLayout from './pages/layouts/SiteLayout';
import SignIn from './pages/site/auth/SignIn';
import SignUp from './pages/site/auth/SignUp';


function App() {
  const navigate = useNavigate();
  const [listProduct, setListProduct] = useState<ProductType>();

  useEffect(() => {
      const getProducts = async () =>{
        const {data} = await ApiProduct.readAll();
        setListProduct(data);
      }
      getProducts();
  },[])

  const onHandleAdd = async (product : ProductType) =>{
    const {data} = await ApiProduct.add(product);
    setListProduct([...listProduct, data])
    navigate("/admin/product/")
  }

  const onHandleUpdate = async (product : ProductType) =>{
    const {data} = await ApiProduct.update(product)
    setListProduct(listProduct?.map(item=> item.id === data.id ? data : item))
    navigate("/admin/product/")
  }

  const onHandleRemove = (id : string) =>{
      ApiProduct.remove(id);
      // const data = listProduct?.filter( item => item._id !== id);
      // setListProduct(listProduct?.filter( item => item._id !== id))
  }
  return (
    <Routes>
      <Route path="admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />

          <Route path="product" element={<Index onListProduct={listProduct} onRemove={onHandleRemove}/>} />
          <Route path="product/new" element={<New onAdd={onHandleAdd}/>}/>
          <Route path="product/:id/edit" element={<Update onUpdate={onHandleUpdate}/>}/>
      </Route>

      <Route path='/' element={<SiteLayout />}> 
        <Route index element={<HomePage />}/>
        <Route path="signup" element={<SignUp />}/>
        <Route path="signin" element={<SignIn  />}/>
      </Route>
    </Routes>
  )
}

export default App