
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-screen grid place-items-center">
        <div>
            <div className="flex flex-col items-center justify-center gap-y-4 font-light ">
                <div className="flex items-center justify-center">
                    <Image src= {'/nada.png'} 
                    alt="Person Image" 
                    width={300} 
                    height={500} 
                    priority={true}
                    className = 'h-auto w-[200px]' 
                    />
                <span className="absolute text-3xl font-semibold text-white"> Hi there</span>
                </div>
                <h1 className="text-center text-3xl font-bold tracking-wider text-pink-500">My name is Nada Chougrati</h1>
                <p>I'm a social media influencer 🎨 </p>
            </div>   
        </div>

            <div>
                <a href="#">Icon</a>
            </div>
            <a href="#">Talk to me!</a>
    </div>
  )
}

export default Hero