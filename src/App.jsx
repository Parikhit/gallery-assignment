import data from './utils/data.json';

import './App.css';

const App = () => {
    const isImage = ['gif', 'jpg', 'jpeg', 'png'];

    return (
        <>
            <nav className='max-w-6xl mx-auto h-15 flex items-center justify-center p-2 border-2 border-black mt-2'>
                <h1 className='text-3xl'>Image and Video Gallery</h1>
            </nav>

            <main className='max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 mt-20 p-3'>
                {data?.map((item) => {
                    const { id, path } = item;
                    const fileType = path.split('.').pop();

                    return isImage.includes(fileType) ? (
                        <div
                            key={id}
                            className='border border-black rounded-lg flex items-center justify-center p-2'
                        >
                            <img
                                width={400}
                                height={300}
                                src={path}
                            />
                        </div>
                    ) : (
                        <div>Video</div>
                    );
                })}
            </main>
        </>
    );
};

export default App;
