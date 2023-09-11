/**
 * @jest-environment jsdom
 */

// import =================================================== //
import { describe, expect, it, jest } from "@jest/globals";
import { withAPI } from "..";

// main ===================================================== //
global.fetch = window.fetch;
describe("Testing withAPI in @shared/libs", () => {

    let mockURL: string;
    let mockFetch: ReturnType<typeof jest.spyOn<Window, "fetch", any>>;
    beforeAll(() => {
        mockURL = "https://any";
        mockFetch = jest.spyOn(window, "fetch");
    });

    it("fetching data", async () => {
        const fakeData = {
            completed: false,
            id: 1,
            title: "delectus aut autem",
            userId: 1,
        };

        mockFetch.mockResolvedValue({
            json: jest.fn().mockResolvedValue(fakeData as never)
        });

        let data = await withAPI(mockURL);
        expect(data).toEqual(fakeData);
        expect(mockFetch).toHaveBeenCalledTimes(1);
    });
    it("fetching data with error message", async () => {
        mockFetch.mockResolvedValue({
            status: 404,
            statusText: "NotFound"
        });

        let data = await withAPI(mockURL);
        expect(data).toBe("404: NotFound");
        expect(mockFetch).toHaveBeenCalledTimes(1);
    });

    afterEach(() => {
        mockFetch.mockReset();
    });

});