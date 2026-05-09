class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        if (t.length > s.length) return "";

        const need = new Map();

        // contar chars necesarios
        for (const c of t) {
            need.set(c, (need.get(c) || 0) + 1);
        }

        let left = 0;
        let matched = 0;

        let minLen = Infinity;
        let start = 0;

        const windowCount = new Map();

        for (let right = 0; right < s.length; right++) {

            const char = s[right];

            // añadir char actual
            windowCount.set(
                char,
                (windowCount.get(char) || 0) + 1
            );

            // char útil y cantidad correcta
            if (
                need.has(char) &&
                windowCount.get(char) <= need.get(char)
            ) {
                matched++;
            }

            // ventana válida
            while (matched === t.length) {

                // guardar mínima
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    start = left;
                }

                const leftChar = s[left];

                // quitar char izquierdo
                windowCount.set(
                    leftChar,
                    windowCount.get(leftChar) - 1
                );

                // deja de ser válida
                if (
                    need.has(leftChar) &&
                    windowCount.get(leftChar) < need.get(leftChar)
                ) {
                    matched--;
                }

                left++;
            }
        }

        return minLen === Infinity
            ? ""
            : s.slice(start, start + minLen);
    }
}
