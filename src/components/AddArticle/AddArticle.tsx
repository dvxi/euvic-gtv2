import * as React from "react";
import { Form, DatePicker, Input, InputNumber, Button } from "antd";

import { useFormik } from "formik";
import * as Yup from "yup";
import dayjs from "dayjs";

type Props = {
  saveArticle: (article: IArticle | any) => void;
  changeArticle: (article: IArticle | any) => void;
  editedArtice: IArticle | null;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  age: Yup.number().integer().required("Age is required"),
  birthdate: Yup.date().required("Birthdate is required"),
  description: Yup.string().max(250),
});

export const AddArticle: React.FC<Props> = ({
  saveArticle,
  changeArticle,
  editedArtice,
}) => {
  // const [article, setArticle] = React.useState<IArticle | {}>();
  const formik = useFormik({
    initialValues: editedArtice || {
      id: -1,
      name: "",
      age: 0,
      birthdate: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: IArticle) => {
      values.id !== -1 ? changeArticle(values) : saveArticle(values);
      formik.resetForm();
    },
  });

  React.useEffect(() => {
    if (editedArtice !== null) {
      formik.setFieldValue("id", editedArtice.id);
      formik.setFieldValue("name", editedArtice.name);
      formik.setFieldValue("age", editedArtice.age);
      formik.setFieldValue(
        "birthdate",
        dayjs(editedArtice.birthdate).format("YYYY-MM-DD")
      );
      formik.setFieldValue("description", editedArtice.description);
    }
  }, [editedArtice]);

  // if (editedArtice !== null) {
  //   setArticle(editedArtice);
  // }
  // const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
  //   setArticle({
  //     ...article,
  //     [e.currentTarget.id]: e.currentTarget.value,
  //   });
  // };

  // const addNewArticle = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   saveArticle(article);
  // };

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onSubmitCapture={formik.handleSubmit}
      >
        <Form.Item label="Name">
          <Input
            id="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Age">
          <InputNumber
            id="age"
            placeholder="Age"
            onChange={(value) => formik.setFieldValue("age", value)}
            value={formik.values.age}
          />
          {formik.touched.age && formik.errors.age ? (
            <div className="error">{formik.errors.age}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Birthdate">
          <DatePicker
            id="birthdate"
            placeholder="Birthdate"
            onChange={(date, dateString) =>
              formik.setFieldValue("birthdate", dateString)
            }
            value={
              dayjs(formik.values.birthdate).isValid()
                ? dayjs(formik.values.birthdate)
                : undefined
            }
            // value={dayjs(formik.values.birthdate)}
          />
          {formik.touched.birthdate && formik.errors.birthdate ? (
            <div className="error">{formik.errors.birthdate}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Description">
          <Input
            id="description"
            placeholder="Description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={!formik.isValid}>
            Add article
          </Button>
        </Form.Item>
      </Form>

      {/* <form onSubmit={addNewArticle} className="Add-article">
        <input
          type="text"
          id="title"
          placeholder="Title"
          onChange={handleArticleData}
        />
        <input
          type="text"
          id="body"
          placeholder="Description"
          onChange={handleArticleData}
        />
        <button disabled={article === undefined ? true : false}>
          Add article
        </button>
      </form> */}
    </>
  );
};

export default AddArticle;
