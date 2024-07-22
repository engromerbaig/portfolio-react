import omerImage from '../../assets/images/omer.jpg';
import Heading from '../Heading/Heading';


const AboutMe = () => {
    return ( <div className="grid md:grid-cols-2 py-16 px-16">
        <div>
            <img src={omerImage} alt="" />
        </div>

        <div className="flex">
        <Heading title="About Me, I'm Muhammad Omer Baig" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus distinctio tempore, cupiditate pariatur debitis magnam? Tenetur recusandae pariatur dolor, esse minus expedita itaque vero sint dignissimos qui ad, delectus laudantium." />

        </div>

    </div> );
}
 
export default AboutMe;