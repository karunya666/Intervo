const BACKEND_URL = import.meta.env.VITE_API_URL;

export async function executeCode(language, code) {
  try {
    const response = await fetch(`${BACKEND_URL}/execute`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language, code }),
    });

    if (!response.ok) return { success: false, error: `HTTP error! status: ${response.status}` };

    const data = await response.json();
    return { success: true, output: data.output || "No output" };
  } catch (error) {
    return { success: false, error: `Failed to execute code: ${error.message}` };
  }
}