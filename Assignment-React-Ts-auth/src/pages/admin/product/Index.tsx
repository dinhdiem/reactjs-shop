import { ProductType } from '../../../types/ProductType';
import { Button, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

type onListProductProps = {
  onListProduct : ProductType[];
  onRemove : (_id : string) => void
}

function Index({onListProduct , onRemove}: onListProductProps) {
  
  
  const columns = [
    {
      title  : 'id',
      dataIndex : 'key',
    },
    {
      title  : 'Tên',
      dataIndex : 'name',
    },
    {
      title  : 'Mô tả',
      dataIndex : 'desc',
    },
    {
      title  : 'Ảnh',
      dataIndex : 'img',
    },
    {
      title  : 'Giá',
      dataIndex : 'price',
    },
    {
      title  : 'Khuyến mãi',
      dataIndex : 'sale',
    },
    {
      title  : 'Chức năng',
      dataIndex : 'func',
    }
  ]

  const listProduct = onListProduct?.map((product)=>{
    const navigate = useNavigate();
    return {
      key : product._id,
      name : product.name,
      desc : product.desc,
      img : <img src={product.img} width={70}/>,
      price : product.price,
      sale : product.sale,
      func : [
        <div className="site-button-ghost-wrapper"  key={product._id}>
          <Button type="primary" ghost onClick={()=>{
           navigate(product._id+"/edit")
          }}>
            Cập nhật
          </Button>,
          
          <Button type="primary" danger ghost onClick={()=> onRemove (product._id) }> 
            Xóa
          </Button>
        </div>
      ],
    }
  })
  return (
    <div>
      <h1><a href="/admin/product/new">Thêm mới</a></h1>
      <Table dataSource={listProduct} columns={columns} />;
    </div>
  )
}

export default Index