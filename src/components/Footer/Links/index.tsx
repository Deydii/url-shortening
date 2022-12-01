import './style.scss';

const Links = () => {
  return (
    <nav className="links">
       <ul>
        <li>Features</li>
        <li><a href="/">Link Shortening</a></li>
        <li><a href="/">Branded Links</a></li>
        <li><a href="/">Analytics</a></li>
       </ul>
       <ul>
        <li>Resources</li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Developpers</a></li>
        <li><a href="/">Support</a></li>
       </ul>
       <ul>
        <li>Company</li>
        <li><a href="/">About</a></li>
        <li><a href="/">Our Team</a></li>
        <li><a href="/">Careers</a></li>
        <li><a href="/">Contact</a></li>
       </ul>
    </nav>
  )
};

export default Links;