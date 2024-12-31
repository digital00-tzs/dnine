"use client"

export default function payments() {
  return (
    <div className="max-w-4xl border m-2 mx-auto p-6">
      <form className="space-y-8">
        {/* Billing Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Billing Information</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">User name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name (Optional)</label>
              <input
                type="text"
                id="companyName"
                placeholder="Company name"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone number"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Payment Option</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <label className="relative flex flex-col items-center space-y-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
              <span className="text-red-500 text-2xl">₹</span>
              <input type="radio" name="payment" value="cash" className="sr-only peer" />
              <span className="text-sm text-center">Cash on Delivery</span>
              <span className="absolute inset-0 rounded-lg peer-checked:border-2 peer-checked:border-blue-500"></span>
            </label>
            
            <label className="relative flex flex-col items-center space-y-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
              <img src="https://via.placeholder.com/150" alt="Paytm" className="w-6 h-6" />
              <input type="radio" name="payment" value="paytm" className="sr-only peer" />
              <span className="text-sm text-center">Paytm</span>
              <span className="absolute inset-0 rounded-lg peer-checked:border-2 peer-checked:border-blue-500"></span>
            </label>
            
            <label className="relative flex flex-col items-center space-y-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
              <img src="https://via.placeholder.com/150" alt="PayPal" className="w-6 h-6" />
              <input type="radio" name="payment" value="paypal" className="sr-only peer" />
              <span className="text-sm text-center">Paypal</span>
              <span className="absolute inset-0 rounded-lg peer-checked:border-2 peer-checked:border-blue-500"></span>
            </label>
            
            <label className="relative flex flex-col items-center space-y-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
              <img src="https://via.placeholder.com/150" alt="Amazon Pay" className="w-6 h-6" />
              <input type="radio" name="payment" value="amazon" className="sr-only peer" />
              <span className="text-sm text-center">Amazon Pay</span>
              <span className="absolute inset-0 rounded-lg peer-checked:border-2 peer-checked:border-blue-500"></span>
            </label>
            
            <label className="relative flex flex-col items-center space-y-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <input type="radio" name="payment" value="card" className="sr-only peer" defaultChecked />
              <span className="text-sm text-center">Debit/Credit Card</span>
              <span className="absolute inset-0 rounded-lg peer-checked:border-2 peer-checked:border-blue-500"></span>
            </label>
          </div>
        </div>

        {/* Card Details */}
        <div className="space-y-4">
          <div>
            <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700">Name on Card</label>
            <input
              type="text"
              id="nameOnCard"
              placeholder="Name on card"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="Card number"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expire Date</label>
              <input
                type="text"
                id="expiry"
                placeholder="DD/YY"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
              <input
                type="text"
                id="cvc"
                placeholder="CVC"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Additional Information</h2>
          <div>
            <label htmlFor="orderNotes" className="block text-sm font-medium text-gray-700">Order Notes (Optional)</label>
            <textarea
              id="orderNotes"
              placeholder="Notes about your order, e.g. special notes for delivery"
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  )
}

