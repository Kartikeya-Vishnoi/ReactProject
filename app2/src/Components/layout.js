import classes from './layout.module.css'
import Nav from './Navigation';
function Layout(props){
return (
    <div> 
    <Nav />

<main className={classes.main}> 
{props.children}
</main>
</div>
);
}
export default Layout;