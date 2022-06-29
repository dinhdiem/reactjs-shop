import { useEffect , useState } from 'react'
import ApiProduct from '../../../api/product';
import { SubmitHandler, useForm } from "react-hook-form";
import {useNavigate} from  'react-router-dom';
import {
  Form,
  Input,
  Upload,
  Button,

} from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { UploadOutlined } from '@ant-design/icons';
import { ProductType } from '../../../types/ProductType';
const { TextArea } = Input;

type FormValues = {
    name : string,
    desc : string,
    price : number,
    sale : number
    onAdd : (data : ProductType) => void;
}
const New = (props: FormValues) => {
    const navigate = useNavigate();
    const {register , handleSubmit, formState: {errors}} = useForm<FormValues>();

    const onSubmit : SubmitHandler<FormValues> = data =>{
        props.onAdd(data);
    }

    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
      setComponentSize(size);
    };
  return (
      
    <div>
        <h1 >THÊM MỚI SẢN PHẨM</h1>
     
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={{ size: componentSize }}
            size={componentSize as SizeType}
            onFinish={handleSubmit(onSubmit)}
        >
            
            <Form.Item label="Tên sản phẩm">
                {/* <Input {...register("name")} placeholder='Nhập tên sản phẩm vào đây *' /> */}
                <input type="text"{...register("name")}
                placeholder='Nhập tên sản phẩm vào đây *'
                className="ant-input"/>
             
            </Form.Item>
            <Form.Item label="Mô tả">
                <textarea cols={10} rows={5} {...register('desc')}  
                placeholder='Nhập mô tá sản phẩm vào đây *' 
                className="ant-input"></textarea>
            </Form.Item>
            <Form.Item label="Giá">
                <input type="number"{...register("price")}
                placeholder='Nhập giá vào đây *'
                className="ant-input"/>
            </Form.Item>
            <Form.Item label="Khuyến mãi">
            <input type="number"{...register("sale")}
                placeholder='Khuyến mãi (nếu có)'
                className="ant-input"/>
            </Form.Item>
            <Form.Item label="Ảnh sản phẩm">
                <Upload {...props}>
                    <Button  icon={<UploadOutlined />}>Tải ảnh lên</Button>
                </Upload>,
            </Form.Item>
            
            <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    ĐỒNG Ý
                </Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default New