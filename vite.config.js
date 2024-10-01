import react from '@vitejs/plugin-react-swc';

export default {
    plugins: [react()],
    server: {
        host: 'localhost',  // or use `true` to listen on all interfaces

    },
};
