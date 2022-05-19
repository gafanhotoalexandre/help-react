import { HeartIcon } from '@heroicons/react/solid';

export default () => {
    return (
        <footer className="flex-shrink-0 px-6 py-4">
            <p className="flex items-center justify-center gap-1 text-sm text-gray-600">
                <span>
                    <HeartIcon
                        aria-hidden="true"
                        className="w-6 h-6 text-red-500"
                    />
                    <span className="sr-only">Lion Solutions</span>
                </span>
            </p>
        </footer>
    );
};
