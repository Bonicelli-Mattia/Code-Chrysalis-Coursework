import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import App from "../../src/App.vue";

describe("App.vue", () => {
  it("renders a title from the data function", () => {
    const data = () => ({ title: "Photo Upload App" });
    const wrapper = shallowMount(App, {
      data: data
    });
    expect(wrapper.find("h1").text()).to.equal("Photo Upload App");
  });
});
