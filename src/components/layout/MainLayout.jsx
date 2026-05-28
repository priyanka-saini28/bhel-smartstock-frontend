import Sidebar from './Sidebar'
import Header from './Header'
import HelpButton from '../sections/HelpButton'

const MainLayout = ({
  children,
  showHeader = false
}) => {

  return (

    <div className="flex bg-[#f5f7fb] min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 ml-[210px]">

        {/* Header */}
        {showHeader && <Header />}

        {/* Page Content */}
        <main className="p-6 overflow-y-auto max-h-[calc(100vh-80px)]">
          {children}
        </main>

      </div>

      {/* Help Button */}
      <HelpButton />

    </div>

  )
}

export default MainLayout