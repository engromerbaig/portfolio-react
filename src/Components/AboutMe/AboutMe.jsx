import omerImage from '../../assets/images/omer.jpg';
import Heading from '../Heading/Heading';


const AboutMe = () => {
    return ( <div className="grid md:grid-cols-2 py-16 px-16">
        <div className="flex justify-center p-8 ">
        <img src={omerImage} alt="Hero" className="w-full lg:w-1/2 aspect-auto" />
        </div>

        <div className="flex px-12">
        <Heading title="About Me, I'm Muhammad Omer Baig" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio tempore, cupiditate pariatur debitis magnam? Tenetur recusandae pariatur dolor, esse minus expedita itaque vero sint dignissimos qui ad, delectus laudantium." />

        </div>

    </div> );
}
 
export default AboutMe;