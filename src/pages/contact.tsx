import React from "react"
import tw, { styled } from "twin.macro"
import { Input, Button } from "reakit"

import DefaultLayout from "../layout/Default"

const Center = tw.div`
  flex justify-center max-w-screen-lg
`

const Form = tw.form`
  grid grid-cols-3 gap-4 m-4
`

const FormKeyContainer = tw.div`mb-3`

const FormValueContainer = tw.div`col-span-2`

const FormEndContainer = tw.div`col-span-3`

const Label = styled.label(({ theme }) => [`color: ${theme.properties.text}`])

const FormInput = styled(Input)(({ theme }) => [
  tw`my-2 w-full`,
  `background-color: ${theme.properties.secondaryBackground}`,
])

const FormTextArea = styled.textarea(({ theme }) => [
  tw`my-2 w-full`,
  `background-color: ${theme.properties.secondaryBackground}`,
])

const FormSubmit = styled(Button)(({ theme }) => [`color: ${theme.properties.text}`])

const ContactPage = (): JSX.Element => (
  <DefaultLayout pageName="Contact">
    <Center>
      <Form name="contact" method="POST" data-netlify="true">
        <FormKeyContainer>
          <Label>Your Name</Label>
        </FormKeyContainer>
        <FormValueContainer>
          <FormInput type="name" name="name" />
        </FormValueContainer>

        <FormKeyContainer>
          <Label>Your Email</Label>
        </FormKeyContainer>
        <FormValueContainer>
          <FormInput type="email" name="email" />
        </FormValueContainer>

        <FormKeyContainer>
          <Label>Message</Label>
        </FormKeyContainer>
        <FormValueContainer>
          <FormTextArea name="message"></FormTextArea>
        </FormValueContainer>

        <FormEndContainer>
          <FormSubmit type="submit">Send</FormSubmit>
        </FormEndContainer>
      </Form>
    </Center>
  </DefaultLayout>
)

export default ContactPage
