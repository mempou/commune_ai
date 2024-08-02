import React from 'react'
import Button from './ui/Button'

const WorkflowLink = () => {
  return (
    <section className='bg-PRIMARY mt-24 w-full flex flex-col text-white justify-center py-20 text-center'>
      <h2 >Commencez à utiliser Workflow dès aujourd&apos;hui.</h2>
      <div className='mt-8'>
        <Button title='Tester notre outil maintenant' />
      </div>
      
    </section>
  )
}

export default WorkflowLink
