import { useState } from "react";
import { Button, DatePicker, Form, Input, message, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const SendInventory = () => {
  const [form] = Form.useForm();
  const [thumbnailFile, setThumbnailFile] = useState([]);

  const [rows, setRows] = useState([
    {
      date: null,
      item: "",
      asin: "",
      expiry: null,
      image: "",
      qty: "",
      type: "",
    },
  ]);

  // নতুন Row যোগ করার ফাংশন
  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        date: null,
        item: "",
        asin: "",
        expiry: null,
        image: "",
        qty: "",
        type: "",
      },
    ]);
  };

  // ফর্ম সাবমিট হ্যান্ডলার
  const handleSubmit = (values) => {
    console.log("Submitted Values:", values);
  };

  const handleThumbnailImage = ({ fileList }) => {
    setThumbnailFile([...fileList]); // Ensure it's an array
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold mb-6">Dynamic Form</h1>

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <div className="space-y-4">
          {rows.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-8 gap-4 items-center bg-white p-4 rounded-lg shadow-md"
            >
              {/* Date */}
              <Form.Item
                name={["rows", index, "date"]}
                label="Date"
                rules={[{ required: true, message: "Please select a date" }]}
              >
                <DatePicker placeholder="Select Date" className="w-full" />
              </Form.Item>

              {/* Item */}
              <Form.Item
                name={["rows", index, "item"]}
                label="Item"
                rules={[{ required: true, message: "Item is required" }]}
              >
                <Input placeholder="Item" />
              </Form.Item>

              {/* ASIN */}
              <Form.Item
                name={["rows", index, "asin"]}
                label="ASIN"
                rules={[{ required: true, message: "ASIN is required" }]}
              >
                <Input placeholder="ASIN" />
              </Form.Item>

              {/* Expiry Date */}
              <Form.Item
                name={["rows", index, "expiry"]}
                label="Date of Expiry"
              >
                <DatePicker placeholder="Expiry Date" className="w-full" />
              </Form.Item>

              {/* Image Upload */}
              <Form.Item name={["rows", index, "image"]} label="Image">
                <Upload
                  style={{
                    width: "100px"
                  }}
                  listType="picture-card"
                  className="avatar-uploader mt-4"
                  beforeUpload={(file) => {
                    const isImage = file.type.startsWith("image/");
                    if (!isImage) {
                      message.error("You can only upload image files!");
                    }
                    return isImage;
                  }}
                  multiple={false} // Single file only
                  fileList={thumbnailFile}
                  onChange={handleThumbnailImage}
                >
                  {thumbnailFile.length < 1 && ( // Show button only if no file is uploaded
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  )}
                </Upload>
              </Form.Item>

              {/* Quantity */}
              <Form.Item
                name={["rows", index, "qty"]}
                label="Quantity"
                rules={[{ required: true, message: "Quantity is required" }]}
              >
                <Input placeholder="Qty" />
              </Form.Item>

              {/* Type */}
              <Form.Item name={["rows", index, "type"]} label="Type">
                <Select
                  placeholder="Select Type"
                  options={[
                    { value: "Type 1", label: "Type 1" },
                    { value: "Type 2", label: "Type 2" },
                  ]}
                />
              </Form.Item>

              {/* Add New Row Button */}
              <div className="mt-7">
                <Button
                  type="dashed"
                  shape="circle"
                  icon={<PlusOutlined />}
                  onClick={handleAddRow}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex mt-6">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="w-[20%]"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SendInventory;
