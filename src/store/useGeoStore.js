// store/useGeoStore.js
import axios from "axios";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useGeoStore = create((set, get) => ({
  ipAddress: "",
  geoInfo: "",
  isLoading: false,
  category: "",
  inputVal: "",
  searchRetailers: [
    {
      id: 1,
      name: "Daily Fresh",
      category: "Grocery",
      location: "Alwarpet, Chennai",
      phoneNumber: "917766554433",
      latitude: 13.039561,
      longitude: 80.25592,
      whatsappLink: "https://wa.me/917766554433?text=Hi%20I%20want%20some",
    },
    {
      id: 2,
      name: "Med Express",
      category: "Pharmacy",
      location: "Adyar, Chennai",
      phoneNumber: "918877665544",
      latitude: 13.0012,
      longitude: 80.2565,
      whatsappLink: "https://wa.me/918877665544?text=Hi%20I%20want%20some",
    },
    {
      id: 3,
      name: "Quick Mart",
      category: "Grocery",
      location: "T.Nagar, Chennai",
      phoneNumber: "919988776655",
      latitude: 13.0418,
      longitude: 80.2341,
      whatsappLink: "https://wa.me/919988776655?text=Hi%20I%20want%20some",
    },
    {
      name: "Apna Bazar",
      category: "Grocery",
      location: "Salt Lake, Kolkata",
      phoneNumber: "919123456789",
      latitude: 22.585895,
      longitude: 88.417527,
      whatsappLink: "https://wa.me/919123456789?text=Hi%20I%20want%20some",
    },
    {
      name: "City Medicos",
      category: "Pharmacy",
      location: "Connaught Place, Delhi",
      phoneNumber: "919876512340",
      latitude: 28.631452,
      longitude: 77.216667,
      whatsappLink: "https://wa.me/919876512340?text=Hi%20I%20want%20some",
    },
    {
      name: "Smart Basket",
      category: "Grocery",
      location: "Banjara Hills, Hyderabad",
      phoneNumber: "918812345678",
      latitude: 17.417991,
      longitude: 78.448288,
      whatsappLink: "https://wa.me/918812345678?text=Hi%20I%20want%20some",
    },
    {
      name: "LifeLine Pharmacy",
      category: "Pharmacy",
      location: "MG Road, Kochi",
      phoneNumber: "917788112233",
      latitude: 9.978998,
      longitude: 76.280891,
      whatsappLink: "https://wa.me/917788112233?text=Hi%20I%20want%20some",
    },
    {
      name: "Daily Fresh",
      category: "Grocery",
      location: "Alwarpet, Chennai",
      phoneNumber: "917766554433",
      latitude: 13.039561,
      longitude: 80.25592,
      whatsappLink: "https://wa.me/917766554433?text=Hi%20I%20want%20some",
    },
    {
      name: "GoodHealth Pharmacy",
      category: "Pharmacy",
      location: "Kothrud, Pune",
      phoneNumber: "917799001122",
      latitude: 18.508808,
      longitude: 73.807182,
      whatsappLink: "https://wa.me/917799001122?text=Hi%20I%20want%20some",
    },
    {
      name: "Big Basket Local",
      category: "Grocery",
      location: "Indiranagar, Bangalore",
      phoneNumber: "918899223344",
      latitude: 12.971892,
      longitude: 77.640785,
      whatsappLink: "https://wa.me/918899223344?text=Hi%20I%20want%20some",
    },
    {
      name: "Care n Cure",
      category: "Pharmacy",
      location: "Civil Lines, Nagpur",
      phoneNumber: "919988776655",
      latitude: 21.15502,
      longitude: 79.090477,
      whatsappLink: "https://wa.me/919988776655?text=Hi%20I%20want%20some",
    },
    {
      name: "Namma Kirana",
      category: "Grocery",
      location: "Rajajinagar, Bangalore",
      phoneNumber: "919800112233",
      latitude: 12.98816,
      longitude: 77.554497,
      whatsappLink: "https://wa.me/919800112233?text=Hi%20I%20want%20some",
    },
    {
      name: "Apollo Medicals",
      category: "Pharmacy",
      location: "Hitech City, Hyderabad",
      phoneNumber: "918899009988",
      latitude: 17.450421,
      longitude: 78.381563,
      whatsappLink: "https://wa.me/918899009988?text=Hi%20I%20want%20some",
    },
  ],
  filteredRetailer: [],
  searchedRetailer: [],

  getVisitorsIp: async () => {
    set({ isLoading: true });
    try {
      const res = await axios.get(import.meta.env.IP_URL);
      set({ ipAddress: res.data });
    } catch (error) {
      console.log("Failed to fetch IP:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  filterRetailer: ({ category }) => {
    const { searchRetailers } = get();
    const res = searchRetailers.filter((e) => e.category === category);
    set({ filteredRetailer: res });
  },

  filterBySearch: ({ inputVal }) => {
    const { searchRetailers } = get();
    const result = searchRetailers.filter((e) =>
      e.name.toLowerCase().includes(inputVal.toLowerCase())
    );
    set({ searchedRetailer: result });
  },

  fetchIpInfo: async () => {
    set({ isLoading: true });
    const { ipAddress } = get();
    try {
      const res = await axiosInstance.get(`/json/${ipAddress}`);
      set({ geoInfo: res.data });
    } catch (error) {
      console.log("Failed to get geoLocation", error);
    } finally {
      set({ isLoading: false });
    }
  },

  handleCategory: (e) => {
    const category = e.target.value;
    const { filterRetailer } = get();
    set({ category });
    filterRetailer({ category });
  },

  handleInput: (e) => {
    set({ inputVal: e.target.value });
  },
}));
