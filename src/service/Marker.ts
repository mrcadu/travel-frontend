import axios from "axios";
import Marker from "../model/Marker";

export default class MarkerService {
  async getAll():Promise<Marker[]>{
    const { data, status } = await axios.get(`http://34.154.79.54:8080/api/v1/country/64bb3a031c81adf24215c429/markers`);
    if (status === 200) {
      return data;
    }
    return [];
  }
  async getById(id: string): Promise<Marker> {
    const { data, status } = await axios.get(`http://34.154.79.54:8080/api/v1/marker/${id}`);
    if (status === 200) {
      return data;
    }
    return {country_id: "", id: "", latitude: "", longitude: "", name: "", pictures: [], type: ""};
  }
  async create(marker:Marker):Promise<Marker>{
    const { data, status } = await axios.post(`http://34.154.79.54:8080/api/v1/marker`, marker);
    if(status === 200){
      return data;
    }
    return {country_id: "", id: "", latitude: "", longitude: "", name: "", pictures: [], type: ""};
  }
  async update(marker:Marker):Promise<Marker>{
    const { data, status } = await axios.put(`http://34.154.79.54:8080/api/v1/marker/${marker.id}`, marker);
    if(status === 200){
      return data;
    }
    return {country_id: "", id: "", latitude: "", longitude: "", name: "", pictures: [], type: ""};
  }
  async delete(id:string){
    await axios.delete(`http://34.154.79.54:8080/api/v1/marker/${id}`)
  }
}
