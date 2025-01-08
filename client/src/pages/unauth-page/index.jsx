import { Button } from "../../components/ui/button";

function UnauthPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Access Denied
        </h1>
        <p className="text-lg mb-6">
          You do not have permission to view this page.
        </p>
        <Button
          variant="outline"
          size="lg"
          onClick={() => window.location.href = "/"}
          className="hover:bg-white hover:text-indigo-500 border-white"
        >
          Go Back to Home
        </Button>
      </div>
    </div>
  );
}

export default UnauthPage;

