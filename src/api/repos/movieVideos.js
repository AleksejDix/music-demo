import api from '@/api/config'

export default {
  index: (id, config = {}) => api.v3.get(`/movie/${id}/videos`, config),
}
