import Slider from 'react-infinite-logo-slider'

const frameworks = [
    { name: 'React', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'TypeScript', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
    { name: 'Next.js', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg' },
    { name: 'Tailwind CSS', image: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'Git', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
    { name: 'Express', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
    { name: 'Vue', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg' },
    { name: 'Flutter', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg' },
];

const FrameworkSlider = () => {
    return (
        <Slider
            width="120px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
            {frameworks.map((framework, index) => (
                <Slider.Slide key={index}>
                    <div className="flex flex-col items-center gap-1">
                        <img 
                            src={framework.image} 
                            alt={framework.name} 
                            className="w-12 h-12 object-contain"
                        />
                        <span className="text-xs font-medium">{framework.name}</span>
                    </div>
                </Slider.Slide>
            ))}
        </Slider>
    )
}

export default FrameworkSlider
