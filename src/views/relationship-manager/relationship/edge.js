export default {
  id: 'edge-01',
  source: 'client-01',
  sourceAnchor: 0,
  target: 'firewall-01',
  // type: 'cc-cubic',
  type: 'cc-line',
  style: {
    stroke: '#A3B1BF',
    lineWidth: 2,
    strokeOpacity: 0.92,
    lineAppendWidth: 10,
    startArrow: false,
    endArrow: true
  },
  labelCfg: {
    position: 'center',
    autoRotate: false
  },
  targetAnchor: 3
}
