import React from 'react'
import { PageType } from '../types'
import ContactData from '../data-components/contact-data'
import { Button } from '../data-components/button'
import SignupForm from '../form/sign-up-form'

export default function ContactUs({ data }: PageType) {
  return (
    <>
      <section className="mt-32 md:mt-64">
        <div
          id="contactUsItems"
          className="grid md:grid-cols-2 place-items-center bg-contact-bg md:h-[600px] relative"
        >
          <div className="grid">
            <div className="w-8/12 p-2 md:p-0">
              <Button
                className={
                  'text-xl md:text-3xl bg-light text-header-blue px-8 py-2 rounded-full mb-5 font-bold'
                }
              >
                {data.homepage.contactUsHeading}
              </Button>
              <h2 className="text-2xl md:text-4xl font-bold">
                {data.homepage.contactUsTitle}
              </h2>
              <p className="">{data.homepage.contactUsText}</p>
            </div>
            <div className="text-sm md:mt-11 grid md:grid-cols-2 place-items-center">
              {data.common.contactUsLinks.map((i, key) => {
                return (
                  <ContactData
                    linkType={i.linkType}
                    text={i.text}
                    imagePath={i.imagePath}
                    key={key}
                  />
                )
              })}
            </div>
          </div>
          <SignupForm data={data}></SignupForm>
        </div>
      </section>
    </>
  )
}