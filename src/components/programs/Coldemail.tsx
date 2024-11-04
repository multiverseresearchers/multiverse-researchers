import { useLayoutEffect } from "react";

const Coldemail = () => {
  useLayoutEffect(() => {
		window.scrollTo(0, 0)
	});

  return (
    <div className="p-8">
        <p className="font-bold text-2xl pt-8 text-center">Cold Email Assistance</p>
        <p className="md:m-auto md:w-1/3 py-3 text-center text-pretty">This page is currently under maintenance. We'll be back soon!</p>
    </div>
  )
}

export default Coldemail