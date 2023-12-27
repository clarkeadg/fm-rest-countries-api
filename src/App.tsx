import ThemeContextProvider from './components/ThemeSwitcher/ThemeContext'
import Layout from './components/Layout/Layout'
import Attribution from './components/Attribution'

const App = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <>
          <div className="px-4 md:px-[80px] py-5">
            Hello
          </div>
          <div className="absolute bottom-0 w-full h-10 flex items-center justify-center">
            <Attribution/>
          </div>
        </>
      </Layout>
    </ThemeContextProvider>
  )
}

export default App