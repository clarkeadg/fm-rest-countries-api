import Layout from '../components/Layout/Layout'

const ErrorPage = () => {
  return (
    <Layout>
      <section className="px-4 md:px-[80px] py-20 text-center">
        <h2 className="font-bold text-5xl mb-2">404</h2>
        <p className="">Page not found</p>
      </section>
    </Layout>    
  )
}

export default ErrorPage
