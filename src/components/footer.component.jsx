const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='max-w-6xl mx-auto text-center mt-14 p-2'>
            <div>&copy; {year} All Rights Reserved</div>
            <div>
                Made with ❤️ by <span className='text-red-500 font-semibold'>Parikhit Baruah</span>
            </div>
        </footer>
    );
};

export default Footer;
