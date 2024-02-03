import spacetime from "spacetime";
import type { Spacetime } from "spacetime";

const a = spacetime.now();

function b(c: Spacetime) {
    return c.add(1, "day");
}

b(a);
