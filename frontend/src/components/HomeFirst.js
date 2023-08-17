import herohome from '../Assets/herohome.jpeg'

const HomeFirst = () => {
    return (  
        <div className='homefirst'>
        
          <img
            src={herohome}
            alt="Homephoto"
            style={{ width: '100%', height: 'auto' }}
          />
          <a href="your-link-url" target="_blank" rel="noopener noreferrer">
          <h1>Read more</h1>
        </a>
        
        
          Your Component Content
       
      </div>
    );
}
 
export default HomeFirst;