import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { VideoItem } from '#/store'
import { getRankList } from '@/views/home/request'
import { RootState } from '.'
import { ResponseType } from 'request/index'

const initialState: { rankList: ResponseType<VideoItem[]> } = { rankList: { data: { data: [{ play: 1, review: 1, video_review: 1, pic: '' }] } } }

const rankStore = createSlice({
  name: 'rankList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(setRankList.fulfilled, (state, action) => {
      state.rankList = action.payload
    })
  }
})

export const setRankList = createAsyncThunk<ResponseType<VideoItem[]>, number>('/rank', async (rId?: number) => {
  return await getRankList(rId)
})

export default rankStore.reducer
export const getRank = (state: RootState) => state.rankStore.rankList
