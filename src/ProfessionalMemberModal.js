import React from 'react'
import Modal from 'react-modal'

import Avatar from './Avatar'
import Button from './Button'
import MemberName from './MemberName'
import MemberDetailsItem from './MemberDetailsItem'
import MemberCertifications from './MemberCertifications'

import theme from './theme'

const styles = {
  root: {
    display: 'flex',
    color: theme.colors.grey.darker,
    fontSize: 18,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  modal: {
    overlay: {
      backgroundColor: 'rgba(44, 62, 80, 0.6)',
    },
    content: {
      width: 540,
      bottom: 'initial',
      padding: 0,
      margin: '50px auto 0 auto',
      borderRadius: 6,
      borderColor: '#FFFFFF',
    },
  },
  body: {
    padding: 40,
    display: 'flex',
    borderBottom: 'solid 1px #E7ECF1',
  },
  leftColumn: {},
  rightColumn: {
    paddingLeft: 30,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    color: '#5E738B',
  },
  company: {
    marginTop: 10,
    fontSize: 16,
    color: '#5E738B',
  },
  certifications: {
    marginTop: 20,
    marginBottom: 10,
    color: '#5E738B',
    fontSize: 16,
  },
  footer: {
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  link: {
    color: '#526825',
    textDecoration: 'none',
  },
}

const ProfessionalMemberModal = ({ open, member, onClose }) => {
  const { name, expired, title, email, website, phone, mobile, fax, location = {}, company, certifications = {} } = member

  return (
    <Modal
      style={styles.modal}
      shouldCloseOnOverlayClick
      contentLabel="Profession Member Modal"
      isOpen={open}
      onRequestClose={onClose}
    >
      <div style={styles.body}>
        <div style={styles.leftColumn}>
          <Avatar />
        </div>
        <div style={styles.rightColumn}>
          <MemberName value={name} expired={expired} />
          {title ? <div style={styles.title}>{title}</div> : null}
          {company ? <div style={styles.company}>{company}</div> : null}
          {location.address ?
            <MemberDetailsItem icon="map-marker">
              <div>{location.address}</div>
              {location.city && location.province && location.country && location.postalCode ?
                <div>
                  <div>{location.city}, {location.province}, {location.country}</div>
                  <div>{location.postalCode}</div>
                </div>
                : null
              }
            </MemberDetailsItem>
            : null
          }
          {phone ? <MemberDetailsItem icon="phone">{phone}</MemberDetailsItem> : null}
          {mobile ? <MemberDetailsItem icon="mobile" customStyles={{fontSize: 19, textAlign: 'center'}}>{mobile}</MemberDetailsItem> : null}
          {fax ? <MemberDetailsItem icon="fax">{fax}</MemberDetailsItem> : null}
          {email ? <MemberDetailsItem icon="envelope">{email}</MemberDetailsItem> : null}
          {website ? <MemberDetailsItem icon="link"><a style={styles.link} href={website} target="_blank" rel="noopener noreferrer">Visit Website</a></MemberDetailsItem> : null}
          {
            certifications.CESCL || certifications.CPESC || certifications.CISEC ?
              <div>
                <div style={styles.certifications}>Certifications:</div>
                <MemberCertifications {...certifications} />
              </div>
              : null
          }
        </div>
      </div>
      <div style={styles.footer}>
        <Button onClick={onClose}>Close</Button>
        {expired ? <Button styleType="warning" style={{ marginLeft: 20 }} onClick={() => (window.location.href = 'https://escabc.site-ym.com/login.aspx?returl=/default.asp?')}>Renew Membership</Button> : null}
      </div>
    </Modal>
  )
}

ProfessionalMemberModal.propTypes = {}

ProfessionalMemberModal.defaultProps = {
  member: {},
}

export default ProfessionalMemberModal
