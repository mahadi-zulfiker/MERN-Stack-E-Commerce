import { Button } from "../../components/ui/button";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
        <p className="text-lg mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button
          variant="outline"
          size="lg"
          onClick={() => window.location.href = "/"}
          className="hover:bg-white hover:text-blue-500 border-white"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
}

export default NotFound;

