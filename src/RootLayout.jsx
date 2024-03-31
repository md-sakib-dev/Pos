import Sidebar from './Sidebar/Sidebar'
const RootLayout = ({children}) => {
  return (
    <div className="flex gap-0">
      <Sidebar />
      <main className="max-w-7xl flex-1 mx-auto py-4">{children}</main>
    </div>
  )
}

export default RootLayout;