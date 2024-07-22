const Footer = () => {
    return ( <div className="grid grid-col md:grid-cols-3 items-center justify-center">
        <div>
            <h1>About Me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quaerat vero corrupti, mollitia soluta eaque voluptatum ex praesentium cupiditate accusamus quasi? Exercitationem maiores soluta enim natus commodi doloribus quidem quis?</p>
        </div>

        <div>
        Links       
        </div>

        <div>
            <h1>Contact</h1>
            <p>omerbaigde@gmail.com</p>
            <p>Hamburg/Germany</p>
            <p>+4915217143817</p>

            <div className="flex gap-4">
                <p>github</p>
                <p>Linkedin</p>
                <p>upwork</p>
            </div>
        </div>
    </div> );
}
 
export default Footer;