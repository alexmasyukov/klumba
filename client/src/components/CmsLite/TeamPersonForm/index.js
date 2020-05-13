import React, { useState, Component } from 'react'
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Row } from "components/Bootstrap"
import styles from 'components/CmsLite/cmslite.module.sass'
import ErrorTitle from "components/CmsLite/common/ErrorTitle"
import Checkbox from "components/CmsLite/common/Checkbox"
import PhotoAndUploader from "components/CmsLite/common/PhotoAndUploader"

const yup_string_2_255_required = Yup.string()
  .min(2, 'От 2-х символов')
  .max(255, '255 символов или меньше')
  .required('Заполните')


const teamPersonSchema = Yup.object({
    name: yup_string_2_255_required,
    rule: yup_string_2_255_required,
    photo: Yup.string()
      .required('Добавьте фото')
})


class TeamPersonForm extends Component {
    render() {
        const { person, uploadImages, getImage } = this.props

        return (
          <Formik
            initialValues={{
                ...person
            }}
            validationSchema={teamPersonSchema}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false)
                alert(JSON.stringify(values, null, 2))
                // saveTeamPerson(JSON.stringify(values, null, 2))
            }}
          >
              {({ values }) => (
                <Form>
                    <Row className="mb-4">
                        <div className="col-md-1">
                            <b>ID:</b> {values.id}
                        </div>
                        <div className="col-md-7">
                            <b>city_id:</b> {values.city_id}
                        </div>
                    </Row>

                    <Row className="align-items-center">
                        <div className="col-md-4">
                            <span className={styles.btitle}>Имя</span>
                            <Field name="name" style={{ width: '100%' }}/>
                            <ErrorMessage name="name" component={ErrorTitle}/>
                        </div>
                        <div className="col-md-2">
                            <Field name={`public`} title="Опубликовано" type="checkbox"
                                   component={Checkbox}/>
                        </div>
                        <div className="col-md-2">
                            <Field name={`is_florist`} title="Флорист" type="checkbox"
                                   component={Checkbox}/>
                        </div>
                    </Row>

                    <Row className="mt-4 mb-4">
                        <div className="col-md-4">
                            <span className={styles.btitle}>Должность:</span>
                            <Field name="rule" style={{ width: '100%' }}/>
                            <ErrorMessage name="rule" component={ErrorTitle}/>
                        </div>
                        <div className="col-md-4">
                            <span className={styles.btitle}>Instagram:</span>
                            <Field name="instagram" style={{ width: '100%' }}/>
                            <ErrorMessage name="instagram" component={ErrorTitle}/>
                        </div>
                    </Row>

                    <Row className="mb-4">
                        <div className="col-md-12">
                            <span className={styles.btitle}>Фото</span>


                            <Field
                              name="photo"
                              component={PhotoAndUploader}
                              getImage={getImage}
                              uploadImages={uploadImages}
                            />

                            <ErrorMessage name={`photo`} component={ErrorTitle}/>
                        </div>
                    </Row>

                    <button type="submit">Сохранить</button>
                </Form>
              )}
          </Formik>
        )
    }
}

export default TeamPersonForm