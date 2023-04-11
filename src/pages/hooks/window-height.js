import { useSyncExternalStore } from 'react';


export function useWindowHeight() {
    // the 3rd parameter is optional and only needed for server side rendering
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function subscribe(callback) {
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
}

function getSnapshot() {
    return  window.innerHeight;
}

function getServerSnapshot() {
    return  0;
}
