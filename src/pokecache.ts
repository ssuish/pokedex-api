export type CacheEntry<T> = {
    val: T;
    createdAt: number;
};

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(interval: number) {
        this.#interval = interval;
        this.#startReap();
    }

    add<T>(key: string, val: T) {
        this.#cache.set(key, { val, createdAt: Date.now() });
    }

    get<T>(key: string): T | undefined {
        const entry = this.#cache.get(key);
        return entry?.val;
    }

    #reap() {
        const TTL = Date.now() - this.#interval;

        for (const [key, entry] of this.#cache) {
            if (entry.createdAt < TTL) {
                this.#cache.delete(key);
            }
        }
    }

    #startReap() {
        this.#reapIntervalId = setInterval(() => this.#reap(), this.#interval);
    }

    stopReap() {
        if (this.#reapIntervalId) {
            clearInterval(this.#reapIntervalId);
            this.#reapIntervalId = undefined;
        }
    }
}
