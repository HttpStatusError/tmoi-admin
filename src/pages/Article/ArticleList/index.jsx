import {ProList} from "@ant-design/pro-components";
import {useState} from "react";
import {Badge, Button, Tag} from "antd";
import {useNavigate} from "react-router-dom";

const dataSource = [
  {
    name: '实验名称1',
    desc: '系统性的沉淀B端知识体系',
    content: [
      {
        label: '阅读量',
        value: 2905,
      },
      {
        label: '点赞量',
        value: 3722,
      },
      {
        label: '发布日期',
        value: '2022年10月13日 12:21',
      },
    ],
  },
  {
    name: '实验名称2',
    desc: '系统性的沉淀B端知识体系',
    content: [
      {
        label: '阅读量',
        value: 2905,
      },
      {
        label: '点赞量',
        value: 3722,
      },
      {
        label: '发布日期',
        value: '2022年10月13日 12:21',
      },
    ],
  },
  {
    name: '实验名称3',
    desc: '系统性的沉淀B端知识体系',
    content: [
      {
        label: '阅读量',
        value: 2905,
      },
      {
        label: '点赞量',
        value: 3722,
      },
      {
        label: '发布日期',
        value: '2022年10月13日 12:21',
      },
    ],
  },
];

const renderBadge = (count, active = false) => {
  return (
    <Badge
      count={count}
      style={{
        marginBlockStart: -2,
        marginInlineStart: 4,
        color: active ? '#1890FF' : '#999',
        backgroundColor: active ? '#E6F7FF' : '#eee',
      }}
    />
  );
};

const ArticleList = () => {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState('tab1');

  return (
    <>
      <ProList
        rowKey={'name'}
        toolbar={{
          menu: {
            activeKey,
            items: [
              {
                key: 'tab1',
                label: <span>已发布文章{renderBadge(99, activeKey === 'tab1')}</span>,
              },
              {
                key: 'tab2',
                label: <span>草稿箱{renderBadge(32, activeKey === 'tab2')}</span>,
              },
              {
                key: 'tab3',
                label: <span>回收站{renderBadge(12, activeKey === 'tab3')}</span>,
              },
            ],
            onChange(key) {
              setActiveKey(key);
            },
          },
          search: {
            onSearch: (value) => {
              alert(value);
            },
          },
          actions: [
            <Button type="primary" key="primary" onClick={() => navigate('/article/editor')}>
              发布文章
            </Button>,
          ],
        }}
        metas={{
          avatar: {
            render: () => (<img src={'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'} width={100} alt={'thumb_url'}/>)
          },
          title: {
            dataIndex: 'name',
          },
          subTitle: {
            render: () => (<><Tag>后端</Tag><Tag color="processing">java</Tag></>)
          },
          description: {
            dataIndex: 'desc',
          },
          content: {
            dataIndex: 'content',
            render: (text) => (
              <div key="label" style={{ display: 'flex', justifyContent: 'space-around' }}>
                {(text).map((t) => (
                  <div key={t.label}>
                    <div style={{ color: '#00000073' }}>{t.label}</div>
                    <div style={{ color: '#000000D9' }}>{t.value}</div>
                  </div>
                  ))}
              </div>
            ),
          },
          actions: {
            render: (text, row) => [
              <a
                href={'/'}
                onClick={e => {
                  e.preventDefault()
                  navigate('/article/editor/123')
                }}
                key="link"
              >
                编辑
              </a>,
              <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">
                复制
              </a>,
              <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">
                删除
              </a>,
            ],
          },
        }}
        dataSource={dataSource}
        pagination={{
          showTotal: false,
          defaultCurrent: 1,
          defaultPageSize: 10
        }}
      />
    </>
  )
}

export default ArticleList;