import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ArchiveProps, VideoItem } from '#/store'
import { getArchiveList, getRankList } from '@/views/home/request'
import { RootState } from '.'
import { ResponseType } from 'request/index'

const initialState: { rankList: ResponseType<VideoItem[]>; animateMADList: ResponseType<ArchiveProps[]> } = {
  rankList: { data: { data: [{ play: 1, review: 1, video_review: 1, pic: '' }] } },
  animateMADList: { data: { data: [] } }
}

const rankStore = createSlice({
  name: 'rankList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(setRankList.fulfilled, (state, action) => {
      state.rankList = action.payload
    }),
      builder.addCase(setAnimateMADList.fulfilled, (state, action) => {
        state.animateMADList = action.payload
      })
  }
})

export const setRankList = createAsyncThunk<ResponseType<VideoItem[]>, number>('/rank', async (rId?: number) => {
  return await getRankList(rId)
})

export const setAnimateMADList = createAsyncThunk<ResponseType<ArchiveProps[]>, { tId: number; p?: number }>('/archive', async ({ tId, p }) => {
  return await getArchiveList(tId, p)
})
export default rankStore.reducer
export const getRank = (state: RootState) => state.rankStore.rankList
