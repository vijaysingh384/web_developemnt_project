import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <h1 className="text-2xl font-semibold text-gray-900">energy tracker</h1>
              </div>
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <Link
                to="/login"
                state={{ redirect: '/dashboard', userType: 'homeowner' }}
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Houseowners
              </Link>
              <Link
                to="/login"
                state={{ redirect: '/provider', userType: 'provider' }}
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Providers
              </Link>
              <Link
                to="/login"
                state={{ redirect: '/admin', userType: 'admin' }}
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Admins
              </Link>
              <Link 
                to="/login" 
                className="px-4 py-2 text-gray-700 hover:text-green-600 font-medium"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar