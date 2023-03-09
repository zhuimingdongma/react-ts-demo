import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ArchiveProps, RankProps, VideoItem } from '#/store'
import { getArchiveList, getRankList } from '@/views/home/request'
import { RootState } from '.'
import { ResponseType } from 'request/index'
import { getRankClassifyList } from 'request/global'

const initialState: { rankList: ResponseType<VideoItem[]>; archiveList: ResponseType<ArchiveProps>; rankClassifyList: ResponseType<RankProps> } = {
  rankList: { data: { data: [{ play: 1, review: 1, video_review: 1, pic: '' }] } },
  archiveList: { data: { data: { archives: [] } } },
  rankClassifyList: { data: { data: { list: [] } } }
}

const rankStore = createSlice({
  name: 'rankList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(setRankList.fulfilled, (state, action) => {
      state.rankList = action.payload
    }),
      builder.addCase(setArchiveList.fulfilled, (state, action) => {
        state.archiveList = action.payload
      }),
      builder.addCase(setRankClassifyList.fulfilled, (state, action) => {
        state.rankClassifyList = action.payload
      })
  }
})

export const setRankList = createAsyncThunk<ResponseType<VideoItem[]>, number>('/rank', async (rId?: number) => {
  return await getRankList(rId)
})

export const setArchiveList = createAsyncThunk<ResponseType<ArchiveProps>, { tId: number; p?: number }>('/archive', async ({ tId, p }) => {
  return await getArchiveList(tId, p)
})

export const setRankClassifyList = createAsyncThunk<ResponseType<RankProps>, number>('/rankClassify', async (rankId: number) => {
  return await getRankClassifyList(rankId)
})

export default rankStore.reducer
export const getRank = (state: RootState) => state.rankStore.rankList

export const getArchive = (state: RootState) => state.rankStore.archiveList

export const getClassifyList = (state: RootState) => state.rankStore.rankClassifyList
