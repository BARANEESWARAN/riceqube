
import Header from '../../organisms/Header/Header';
import "./Template.css"
import Footer from '../../organisms/Footer/Footer';


const Template = ({children}) => {
return (
<div class="homepage-template">
  <Header class="Header" />
  <main>
{children}
  <div>

</div>
  </main>
 
  <Footer class="Footer" />
</div>

  );
};

export default Template;
