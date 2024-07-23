import react from '@vitejs/plugin-react-swc';

export default {
    plugins: [react()],
    server: {
        host: '10.167.1.171', 
        port: 5174,
    },
};
