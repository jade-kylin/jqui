import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  moveCom = () => {
    var $ = window.$
    // 选择拖拽按钮class
    $(".draggable").draggable({
      connectToSortable: ".droppable",//容器class
      helper: "clone",
      revert: "invalid",
      cursor: "move",
    })
    // 选择容器class
    $(".droppable").droppable({
      accept: '.draggable',//拖拽按钮class
      greedy: true,//默认情况下，将元素放置在嵌套的可放置对象上时，每个可放置对象将接收该元素,默认false
      drop: (event, ui) => {
        // 此处保存信息，即拖放进入容器的图形名字和位置坐标
        // let dragGraphical = {
        //   name: ui.helper[0].innerText.slice(0, -2),
        //   top: event.offsetY - 60,
        //   left: event.offsetX - 60,
        //   width: 360,
        //   height: 220,
        //   type: Number(ui.helper[0].innerText.slice(-1)),
        //   zIndex: Number(ui.helper[0].innerText.slice(-1)) === 6 ? 10 :
        //     Number(ui.helper[0].innerText.slice(-1)) === 7 ? 20 : 15
        // }
        console.log('dropdropdropdropdrop', ui.draggable[0].id)
      },
      over: (event, ui) => {
        console.log('overoveroverover')

      }
    })
  }
  // 初始化函数
  initDragDrop = () => {
    var $ = window.$
    // 解决首次刷新加载问题
    // 组件容器页面内的拖拽
    $('.drawGraphical').draggable({
      cursor: 'move',
      drag: (event, ui) => {


      },
      stop: () => {
        // 存储信息 没有移入过程的操作
        console.log('没有移入过程的操作')

      },
      // 靠近后吸附
      snap: 'div',
      // 多远后执行吸附
      snapTolerance: 10,
      // 控制当前元素的zIndex
      zIndex: 100
    })
    // 是否可以调整尺寸
    $(".drawGraphical").resizable({
      containment: "parent",
      autoHide: true,
      // ghost: true,
      start: (event, ui) => {

      },
      stop: (event, ui) => {
        // 当前元素的大小

      }
    })
  }
  componentDidMount() {
    this.moveCom()
  }

  render() {
    return (
      <div style={{
        width: '100%',
        height: window.innerHeight,
        background: '#001527',
        display: 'flex',
      }}>
        {/* 被拖动元素父元素 */}
        <div style={{
          width: '50%',
          height: '100%',
          background: '#0ff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div
            id='a'
            className='draggable'
            style={{
              width: '100px',
              height: '100px',
              background: '#ccc',
              // cursor:'pointer',
            }}></div>

          <div
            id='b'
            className='draggable'
            style={{
              width: '100px',
              height: '100px',
              background: '#00c',
              // cursor:'pointer',
            }}></div>

        </div>
        {/* 被拖入元素 */}
        <div
          className='droppable'
          style={{
            width: '50%',
            height: '100%',
            background: '#f0f',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow:'color-dodge',
          }}>
            <div style={{
              width:'150%',
              height:'150%',
              background:'#F00',
            }}></div>
        </div>
      </div>
    )
  }
}
