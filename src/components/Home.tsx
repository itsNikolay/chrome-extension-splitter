import React from 'react'

const res = [
  [12, null],
  [6, 6],
  [3, 9],
  [9, 3],
]

const Home = () => {
  return (
    <div className="container mx-auto w-96 mt-10">
      <div className="grid grid-row-3 gap-5">
        {res.map((row, index) => {
          return (
            <button key={index} className="hover:shadow-lg transition-all">
              <div className="h-12 grid grid-cols-12 gap-2">
                {row.filter((num) => num !== null).map((num, index2) => {
                  return (
                    <div
                      className={`border border-blue-500 col-span-${num}`}
                      key={index2}
                    ></div>
                  )
                })}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Home
